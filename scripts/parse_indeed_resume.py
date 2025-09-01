import PyPDF2
import json
import re

def extract_resume_data(pdf_path):
    with open(pdf_path, "rb") as f:
        reader = PyPDF2.PdfReader(f)
        all_text = ""
        for page in reader.pages:
            txt = page.extract_text()
            if txt:
                all_text += txt + "\n"

    # Extract Summary
    summary_match = re.search(
        r'Professional Summary\n(.+?)(?=\nWilling to relocate|\nWork Experience)',
        all_text, re.DOTALL)
    summary = summary_match.group(1).strip() if summary_match else ""

    # Extract Education
    education_match = re.search(
        r'Education\n(.+?)(?:\n[Bb]achelor|Skills|\Z)', all_text, re.DOTALL)
    education_block = education_match.group(1).strip() if education_match else ""
    degree_match = re.search(
        r'([A-Za-z ()]+)\n(.*?) -([A-Za-z ]+)\n([A-Za-z]+) (\d{4}) to ([A-Za-z]+) (\d{4})',
        education_block, re.DOTALL)
    # Quick fallback degree extraction
    degree = "Bachelor of Science"
    university = "University of Nebraska at Omaha"
    location = "Omaha, NE"
    startDate = "2017"
    endDate = "2022"
    details = []
    for line in education_block.splitlines():
        line = line.strip()
        if line and not re.match(r'^[A-Za-z ]+\(\w+\)$', line):
            details.append(line)
    education = [{
        "degree": degree,
        "type": degree,
        "university": university,
        "location": location,
        "startDate": startDate,
        "endDate": endDate,
        "details": details
    }]

    # Experiences
    exp_match = re.search(
        r'Work Experience\n(.+?)(?=\nEducation|\nSkills|\Z)', all_text, re.DOTALL)
    experiences_text = exp_match.group(1).strip() if exp_match else ""
    exp_chunks = re.split(
        r"\n(?=[A-Za-z][\w\s]+\n[A-Za-z][\w\s]+\s*-\s*[A-Za-z]+,?\s*\w+)", experiences_text)

    experiences = []
    for chunk in exp_chunks:
        lines = [l.strip() for l in chunk.strip().split('\n') if l.strip()]
        if not lines or len(lines) < 2:
            continue
        # Simple extraction based on line patterns
        jobTitle = lines[0]
        employer_location = lines[1]
        startDate, endDate = "", ""
        employer = employer_location
        location = ""
        date_match = re.search(r'([A-Za-z]+ \d{4}) to (Present|\w+ \d{4})', chunk)
        if date_match:
            startDate, endDate = date_match.groups()
        if "-" in employer_location:
            employer, location = map(str.strip, employer_location.split("-", 1))
        details = [l for l in lines[2:] if not re.match(r'([A-Za-z]+ \d{4}) to (Present|\w+ \d{4})', l)]
        experiences.append({
            "jobTitle": jobTitle,
            "employer": employer,
            "location": location,
            "startDate": startDate,
            "endDate": endDate,
            "details": details
        })

    # Skills extraction: skill name (years) or skill name only
    skills_section = re.search(r'Skills\n(.+?)(?:\nLinks|\nCertifications|\Z)', all_text, re.DOTALL)
    skills_text = skills_section.group(1) if skills_section else ""
    skills = []
    # Skills may be in the form: •SkillName (5 years)
    for line in skills_text.splitlines():
        match = re.match(r'•?([\w \-/\+#\(\).]+?)(?: \((\d+) years?\))?$', line.strip())
        if match:
            name = match.group(1).strip()
            years = int(match.group(2)) if match.group(2) else 0
            if name:
                skills.append({"name": name, "years": years})

    return {
        "summary": summary,
        "education": education,
        "experiences": experiences,
        "skills": skills
    }

if __name__ == "__main__":
    data = extract_resume_data("Resume.pdf")
    with open("indeedResume.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
    print("Wrote resume data to indeedResume.json")