import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

export default function Fog() {
    const refContainer = useRef<HTMLDivElement>(null);
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer>();

    useEffect(() => {
        const { current: container } = refContainer;
        if (container && !renderer) {
            let delta: number;
            const clock = new THREE.Clock();
            const scW = container.clientWidth;
            const scH = container.clientHeight;
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(scW, scH);
            renderer.outputEncoding = THREE.sRGBEncoding;

            container.appendChild(renderer.domElement);
            setRenderer(renderer);

            const scene = new THREE.Scene();

            const camera = new THREE.PerspectiveCamera(
                75,
                scW / scH,
                1,
                10000
            );
            camera.position.z = 1000;
            scene.add(camera);

            THREE.ImageUtils.crossOrigin = ""; //Need this to pull in crossdomain images from AWS

            const light = new THREE.DirectionalLight(0xffffff, 1);
            light.position.set(-1, 0, 1);
            scene.add(light);

            const smokeTexture = new THREE.TextureLoader().load("/smoke.png");
            const smokeMaterial = new THREE.MeshLambertMaterial({
                map: smokeTexture,
                transparent: true,
                opacity: 0.2
            });
            const smokeGeo = new THREE.PlaneGeometry(300, 300);
            const smokeParticles: THREE.Mesh[] = [];

            for (let p = 0; p < 15; p++) {
                const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
                particle.scale.set(2, 2, 2);
                particle.position.set(Math.random()*1000-500, Math.random()*1000-500, Math.random()*1000-100);
                particle.rotation.z = Math.random() * 360;
                scene.add(particle);
                smokeParticles.push(particle);
            }

            const render = () => {
                renderer.setClearColor(0xffffff, 0);
                // noinspection TypeScriptValidateJSTypes
                renderer.render(scene, camera);
            }

            const evolveSmoke = () => {
                for(let i = 0; i < smokeParticles.length ; i++)
                {
                    smokeParticles[i].rotation.z += delta * 0.2;
                }
            }

            const animate = () => {
                delta = clock.getDelta();
                requestAnimationFrame(animate);
                evolveSmoke();
                render();
            }

            animate()
        }

        return () => {
            renderer?.dispose();
        };
    }, [renderer]);

    return (
        <div
            style={{ height: "100%", width: "100%", position: "relative" }}
            ref={refContainer}
        />

    );
};