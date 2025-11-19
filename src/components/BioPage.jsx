import {useWindowSizeType} from "../hooks/useWindowSizeType.js";

function BioPage() {
  const sizeType = useWindowSizeType();

  return (
    <div>
      <h1>Bio</h1>
    </div>
  )
}

export default BioPage;