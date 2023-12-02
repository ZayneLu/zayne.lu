/* eslint-disable react/no-unknown-property */
function Lighting() {
  return (
    <>
      <ambientLight />
      <pointLight position={[-10, -10, 10]} decay={0} intensity={Math.PI} />
    </>
  );
}

export default Lighting;
