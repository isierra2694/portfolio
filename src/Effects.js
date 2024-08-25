import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useRef } from "react";

export default function Effects() {
	const scroll = useScroll();
	const vignette = useRef(null);

	useFrame(() => {
		const p1 = scroll.range(0 / 10, 0.25 / 10);
		const p2 = scroll.range(5 / 10, 5.25 / 10);

		vignette.current.darkness = (1 - p1) + p2;
	});
	return (
		<EffectComposer>
			<Bloom />
			<Vignette ref={vignette} eskil={false} offset={0.1} />
		</EffectComposer>
	);
}
