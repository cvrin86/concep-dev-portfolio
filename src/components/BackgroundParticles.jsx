import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#0F172A" // bleu nuit pour les points
          },
          shape: {
            type: "triangle"
          },
          opacity: {
            value: 0.1,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.03,
              sync: false
            }
          },
          size: {
            value: { min: 0.2, max: 1 }, // triangles plus petits ✨
            random: true
          },
          links: {
            enable: true,
            distance: 120,
            color: "#38BDF8", // turquoise clair
            opacity: 0.08, // plus discret
            width: 1,
            triangles: {
              enable: true,
              color: "#40E0D0", // turquoise
              opacity: 0.15 // plus subtil
            }
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.2 }
            },
            push: { quantity: 2 }
          }
        },
        background: {
          color: "transparent"
        }
      }}
    />
  );
}

export default BackgroundParticles;
