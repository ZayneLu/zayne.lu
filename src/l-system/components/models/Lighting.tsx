/* eslint-disable react/no-unknown-property */
const Lighting = () => (
  <>
    <ambientLight />
    <pointLight position={[-10, -10, 10]} decay={0} intensity={Math.PI} />
  </>
);

export default Lighting;
