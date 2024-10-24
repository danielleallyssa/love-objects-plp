const fragTest = `

void main (){gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);}

`;

const frag = `

#version 100

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform float seed;

varying vec2 v_texcoord;

${includes}

void main(void)
{
    vec2 uv = v_texcoord;

    // makes the mouse position number smaller (between 0 and 1)
    vec2 mouse = u_mouse / u_resolution;
    
    // find the distance between mouse and points
    float dist = distance(uv, mouse);

    // the strengh or distance from the point
    float strength = smoothstep(0.5, 0.0, dist);

    vec4 color1 = vec4(0.0, 0.0, 0.5, 1.0);
    vec4 color2 = vec4(0.0, 0.0, 0.0, 1.0);
    
    // Grain effect
    // float grain = mix(-0.05, 0.025, rand(uv));
    float grain = rand(uv) * mix(0.1, 0.05, strength);
    
    // Movement for fbm
    vec2 movement = vec2(u_time * 0.01, u_time * -0.01);
    movement *= rotation2d(u_time * 0.005);
    
    // Fractional Brownian Motion
    float f = fbm(uv + movement + seed);
    f *= 2.0;
    f += grain;
    f += u_time * 0.0625;
    // f += u_time / 40.0;
    f = fract(f);
    
    float gap = mix(0.5, 0.01, strength);
    float mixer = smoothstep(0.0, gap, f) - smoothstep(0.9 - gap, 1.0, f);
    // float mixer = smoothstep(0.0, 0.25, f) - smoothstep(0.75, 1.0, f);
  
    vec4 color = mix(color1, color2, mixer);
    
    gl_FragColor = color;
}

`;
