import { Canvas, useFrame } from "@react-three/fiber";
import { ShipWireframe } from "../objects/ShipWireframe";
import { useRef } from "react";

export default function ShipWireframeImage() {
	const shipRef = useRef(null);

	useFrame(() => {
    	if (shipRef.current) {
      		shipRef.current.rotation.y += 0.01 * 0.25;
    	}
  	});
	return (
		<Canvas gl={{ alpha: true }} camera={{ position: [15, 5, 0], fov: 40 }}>
			<ShipWireframe ref={shipRef}/>
		</Canvas>
	);
}
