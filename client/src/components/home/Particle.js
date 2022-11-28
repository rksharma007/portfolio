import Particles from "react-tsparticles";

export default function Particle () {
  return (
  
    <Particles
    options={{
      background: {
        color: "#181A18"
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true
        }
      },
      particles: {
        color: {
          value: "#ffffff"
        },
        number: {
          density: {
            enable: true,
            area: 1000
          },
          limit: 0,
          value: 300
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 1,
            sync: false
          },
          random: {
            enable: true,
            minimumValue: 0.05
          },
          value: 1
        },
        shape: {
          type: "star"
        },
        size: {
          randmon: {
            enable: true,
            minimumValue: 0.5,
            value: 1
          }
        }
      }
    }}
  />
  )
};