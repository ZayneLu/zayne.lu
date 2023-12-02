import { Dispatch, SetStateAction } from 'react';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import { getTheme } from '@table-library/react-table-library/baseline';
import * as THREE from 'three';
import SectionWrapper from '../utilities/SectionWrapper';

interface CameraControllerProps{
  position: THREE.Vector3
  setPosition: Dispatch<SetStateAction<THREE.Vector3>>
}

interface CameraNode{
  position: THREE.Vector3
}

const cellStyle = {
  border: 'none',
  fontSize: '1rem',
  margin: 0,
  padding: 0,
  width: '100%',
};

function CameraController({ position, setPosition }: CameraControllerProps) {
  const theme = useTheme(getTheme());

  const columns = [{
    label: 'X',
    renderCell: (node: CameraNode) => (
      <input
        type="number"
        style={cellStyle}
        value={node.position.x}
        onChange={(e) => setPosition(
          new THREE.Vector3(parseFloat(e.target.value), node.position.y, node.position.z),
        )}
      />
    ),
  },
  {
    label: 'Y',
    renderCell: (node: CameraNode) => (
      <input
        type="number"
        style={cellStyle}
        value={node.position.y}
        onChange={(e) => setPosition(
          new THREE.Vector3(node.position.x, parseFloat(e.target.value), node.position.z),
        )}
      />
    ),
  },
  {
    label: 'Z',
    renderCell: (node: CameraNode) => (
      <input
        type="number"
        style={cellStyle}
        value={node.position.z}
        onChange={(e) => setPosition(
          new THREE.Vector3(node.position.x, node.position.y, parseFloat(e.target.value)),
        )}
      />
    ),
  }];

  return (
    <SectionWrapper>
      <h3 style={{ display: 'inline', padding: '5px' }}>Camera Position:</h3>
      <CompactTable columns={columns} data={{ nodes: [{ position }] }} theme={theme} />
    </SectionWrapper>
  );
}

export default CameraController;
