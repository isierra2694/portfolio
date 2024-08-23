import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

export default function Effects() {
	const [vignette, anim] = useSpring(() => ({
		intensity: 1,
		config: { duration: 2000 }
	}));
	
	useEffect(() => {
		anim.start({
			intensity: 0
		});
	}, []);

	return (
		<EffectComposer>
			<Bloom />
			<Vignette eskil={false} offset={0.5} darkness={0}/>
		</EffectComposer>
	);
}
