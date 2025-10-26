import type { Movie } from './types';

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: '듄',
    posterUrl: 'https://i.namu.wiki/i/O1cYDJcUFSfDpVlbXQJV8TPIQLpj2ZVHq5lWpY-PB3U5mxCyI46QAEwD9FuF-j2Ut58mNP8MjvBHCbTJHBuPLy7cCvj1kSvdFcLMcTO9O_CsGzpEOKnCNG3-KLOtzlJGgmbkQo82f_PuxAwf3uraIw.webp',
    cinematicStyle: `A realistic desert cinematic shot filled with warm dust and deep sunlight.
Slow downward camera tilt on a 50mm lens at f/2.8, focused on human scale against massive dunes.
Soft bloom grows from 0 to 100% over 4.5 seconds, light scattering through sand particles.
Scene ends with a gentle fade to black as the glow disappears.`,
    lightingPalette: {
      light: 'Harsh desert sunlight mixed with soft ambient haze, creating strong highlights and deep silhouettes.',
      bloom: 'Warm bloom grows slowly for 6 seconds as dust scatters the light.',
      contrast: 'Low color contrast but strong tonal separation between brightness and texture.'
    },
    cameraAndFocus: {
      camera: 'Large-format cinematic camera, full-frame digital sensor with wide dynamic range.',
      lens: 'Medium telephoto lens (around 50mm) for compressed perspective and soft edges.',
      focus: 'Shallow depth of field to isolate subject within vast desert.',
      motion: 'Slow steady pan and low tilt to emphasize scale and stillness.'
    },
    audioDesign: `Deep low-frequency wind pressure blending with rolling sand resonance.
Distant mechanical rumbles echo softly, emphasizing the emptiness of desert space.
Sparse breathing reverb and faint grain collision replace any score or ambient tone.`,
    colorPalette: `60:30:10 —
Dominant 60%: #CBB438 (sand gold), #9F955F (bronze), #44342C (deep shadow brown)
Secondary 30%: #CCCC8C (dry dune beige), #5C4C0C (desert soil brown)
Accent 10%: #EAE39A (sunlit ochre glow)`,
  },
  {
    id: 2,
    title: '인터스텔라',
    posterUrl: 'https://i.namu.wiki/i/W18F7fcDSDQ_odqXWR1AXGBuz_rvl7KkhZHEemzKive22YRz40ncPejDAnSR8IkNXEIjDil5lZe2fr5ddTa7jJkoXYs-C9seq7uUWTVdUlV5S_z2I6N-lRHZ8f7j4iH0OTeyqh5ahY6u8_ZB-PUXGg.webp',
    cinematicStyle: `Cinematic realism with large-format clarity, strong exposure balance between earth and space.
Camera moves slowly downward in a low-gravity motion, steady focus transition at 50mm lens.
Cold white light flickers into orange glow during emotional climax.
The final fade happens over 3 seconds, leaving only ambient sound.`,
    lightingPalette: {
      light: 'Mix of natural daylight and white LED interior fill, keeping a realistic physical tone.',
      bloom: 'Controlled, minimal bloom through atmosphere and sunlight glare.',
      contrast: 'High tonal contrast to separate the black space from human skin tone and light reflection.'
    },
    cameraAndFocus: {
      camera: '70mm large-format film camera for ultra-wide cinematic scope.',
      lens: 'Standard 50mm lens with minimal distortion.',
      focus: 'Deep focus to keep foreground and cosmic background sharp together.',
      motion: 'Natural handheld movements with subtle horizon tracking.'
    },
    audioDesign: `Subtle mechanical hum synchronized with rotating motion and cockpit vibration.
Compressed air and oxygen hiss layered under dialogue.
Environmental silence punctuated by low engine resonance and vacuum pulse.`,
    colorPalette: `60:30:10 —
Dominant 60%: #6E6B5E (dust grey), #9A8F7A (desaturated brown), #BFB8A3 (soft soil beige)
Secondary 30%: #1E2F40 (cosmic navy), #2B3D50 (deep space blue)
Accent 10%: #F8D7B1 (warm ambient light)`,
  },
  {
    id: 3,
    title: '매드맥스: 분노의 도로',
    posterUrl: 'https://i.namu.wiki/i/AeyxvqfGWnLb0pGoF7Reu42A9ZEuhU-Hryxm7REBkplKUFqwBPO84e85R4IfzjxDE2xChO3zhQ5-WPZs8bYiTrm4pIMPSbCe76haGFd60Ydei5W9JwswaBrXuOER-UcKWKoghHJocAVEOkC6ZLLewA.webp',
    cinematicStyle: `High-contrast cinematic style with strong physical motion and desert chaos.
Fast tilt-down camera at wide angle (20mm) with handheld instability.
Amber dust and flame reflections surge for 2 seconds before overexposure bloom.
Camera holds center composition, then cuts to black explosion frame.`,
    lightingPalette: {
      light: 'Hard golden sunlight from above with deep shadows, frequent flare from explosions.',
      bloom: 'High-intensity thermal bloom for 3 seconds, producing a shimmering heat-warp effect.',
      contrast: 'Extreme color saturation with intense brightness and deep ambient shadows.'
    },
    cameraAndFocus: {
      camera: 'Digital high-speed camera for fast motion and action clarity.',
      lens: 'Ultra wide (around 20mm) to exaggerate speed and chaos.',
      focus: 'Deep focus on moving subjects; motion blur accentuates violence.',
      motion: 'Fast tracking, dynamic whip pans, mounted vehicle rigs.'
    },
    audioDesign: `Turbulent metal impact, tire friction, and dust-struck air bursts dominate the dynamic range.
Close-up engine growls layered with debris scraping and echoing inside helmets.
The world vibrates with percussive metallic resonance, no melodic element.`,
    colorPalette: `60:30:10 —
Dominant 60%: #F2A541 (sun-baked gold), #EEB55C (burnt desert sand)
Secondary 30%: #236B8E (cold blue dusk), #4CA9C8 (metallic cool tone)
Accent 10%: #BF2E1A (flame red intensity)`,
  },
  {
    id: 4,
    title: '라라랜드',
    posterUrl: 'https://i.namu.wiki/i/y6wjtsL5OnmNY1wpQWlqXZgPAZj3uPw4yi8lguHZNfYNxoSbqrdVAwOGOVAK3c4UDmmOtDwnHBonSzZkGUfs4aTXjC67HQ3yujyRvgPhrZM5b7QoTSXlN1TGD30plcOeIWURlc0fJCq44098FOqnyw.webp',
    cinematicStyle: `Dreamlike realistic musical tone with smooth camera rhythm.
Shot in a continuous Steadicam take with a gentle rotational dolly around subjects.
Soft blue and gold bloom intensifies in sync with music tempo.
Scene closes with slow motion flare and smooth fade-out into black.`,
    lightingPalette: {
      light: 'Warm directional light mixed with glowing neon and soft street reflections.',
      bloom: 'Gentle bloom expanding for 4 seconds when music peaks, blending blue and gold tones.',
      contrast: 'Balanced mid-level contrast, keeping faces bright while preserving night texture.'
    },
    cameraAndFocus: {
      camera: '35mm film-style digital camera capturing romantic texture.',
      lens: '35mm–50mm prime lens for classic cinema look.',
      focus: 'Shallow and shifting focus to highlight emotional connection.',
      motion: 'Smooth Steadicam shots and rotating dolly moves synchronized with rhythm.'
    },
    audioDesign: `Ambient reverb of streets, footsteps, and camera dolly tracks captured in real-time.
Soft wind passes through open space with subtle microphone movement.
Occasional breath detail and cloth texture emphasize physical closeness instead of music.`,
    colorPalette: `60:30:10 —
Dominant 60%: #F3C64B (golden sunset), #E1974A (amber glow), #B5542A (warm rust)
Secondary 30%: #451A03 (deep mahogany), #6C2A14 (brick undertone)
Accent 10%: #570D1A (vintage crimson red)`,
  },
  {
    id: 5,
    title: '블레이드 러너 2049',
    posterUrl: 'https://i.namu.wiki/i/48sLJWMN4LP1zwzmHFrankpfCD7HMTW9skPNwlf0tUMI5ihnc42Pqv_Jb40l-eJ5mkPgEJJxopvIDKzpTO5IcFuPFstEBVj37vHXzc76fG8E5bcZppwxFMuDclQ3IVxRwuBYNc83XelplJCH1artUA.webp',
    cinematicStyle: `Neon-noir cinematic tone with layered fog and reflections.
Camera slowly pans across industrial lights, maintaining 35mm mid-focus.
Light bloom rises through haze for 5 seconds, producing glowing silhouettes.
The shot concludes with motionless symmetry and a soft fade to darkness.`,
    lightingPalette: {
      light: 'Neon backlight through heavy fog and soft diffusion reflections on wet surfaces.',
      bloom: 'Controlled bloom over 5 seconds, highlighting silhouettes in fog layers.',
      contrast: 'Dynamic contrast between hard shadows and glowing reflections, keeping visual depth.'
    },
    cameraAndFocus: {
      camera: 'High-resolution digital camera with clean sensor and low noise.',
      lens: 'Mid-range 50mm lens to balance realism and dreamlike visuals.',
      focus: 'Soft focus transitions; selective sharpness around reflections and silhouettes.',
      motion: 'Slow pans and static compositions with minimal camera shake.'
    },
    audioDesign: `Low drone of distant machinery blended with electric current flickers and air pulse.
Wet surface reflections carry delayed reverb from footsteps and hologram flick shifts.
Silence dominates between echoes, creating mechanical isolation and tension.`,
    colorPalette: `60:30:10 —
Dominant 60%: #773D25 (burnt sienna), #85624E (dust brown), #9C8269 (industrial clay)
Secondary 30%: #47544D (mist green-gray), #748D89 (machine teal)
Accent 10%: #BF3F8F (neon magenta pop)`,
  },
  {
    id: 6,
    title: '그랜드 부다페스트 호텔',
    posterUrl: 'https://i.namu.wiki/i/TLGYGsUC1X7eOxz9d0feiJUg-yI0dRg-kDdYIZvPgsplHlJCsE3o9_0chcDIh5EnaXIfU6Ia8JW7vMW_Anl2WynoeLaqQeChB5H0_BPOk9QscPu6ro69EtDV4WDyfqW10fWx7rfNPUrX808vjrcjDA.webp',
    cinematicStyle: `Stylized symmetric cinematic frame with pastel tones and flat perspective.
Fixed central camera composition; slow dolly left or right within set geometry.
Soft thin bloom applied for 1 second at color peaks.
Scene transitions via hard cut, no fade, synchronizing with pacing rhythm.`,
    lightingPalette: {
      light: 'Even soft lighting across the set; warm falloff to pastel edges.',
      bloom: 'Subtle 1-second bloom used only for color peaks in each frame.',
      contrast: 'Mid-to-low contrast to maintain harmony among pastel colors and clean geometry.'
    },
    cameraAndFocus: {
      camera: 'Standard 35mm film camera to preserve nostalgic film grain.',
      lens: '40mm prime lens for symmetrical framing.',
      focus: 'Uniform focus across frame, minimal depth variation for tableau style.',
      motion: 'Horizontal or vertical camera slides—precise, geometric, and centered.'
    },
    audioDesign: `Precision-balanced Foley: clock ticks, shoes on polished floor, paper folds, and subtle air pressure.
Every micro sound placed with rhythm and spatial symmetry.
Muted environmental tone — each sound responds to geometry rather than ambience.`,
    colorPalette: `60:30:10 —
Dominant 60%: #FF9E9D (dusty rose), #FFEB3B (vintage yellow), #FF5252 (fiery coral)
Secondary 30%: #BB86FC (muted mauve), #7C4DFF (royal purple)
Accent 10%: #8BC34A (Wes Anderson green)`,
  },
  {
    id: 7,
    title: '드라이브',
    posterUrl: 'https://i.namu.wiki/i/z0dsc3wf1aMPzCPCTMWo2-f5IrmG-ZjJnAsxhJ7vMWLGep-PsE99-Hg5BTrIFAc6rZ0cxlln8XYM_GBy-8t2sEYwvQjF7RiaXQQe_e1qhIrjzKIxsHjLXOhFrO3Zwx5vZNh2V-YXO8ZHEu9FG1ScvQ.webp',
    cinematicStyle: `Dark neon cinematic style with isolation and reflection focus.
Camera holds still with a slow dolly-in on the subject under pink light.
Bloom intensity pulses with neon flickers every 1.5 seconds.
Scene ends with high contrast pink-blue glow fading into shadow.`,
    lightingPalette: {
      light: 'Neon rim light from pink and blue signage, mixed with reflective surfaces.',
      bloom: 'Pulsing bloom synchronized with flickering light every 1.5 seconds.',
      contrast: 'Sharp lighting contrast between neon highlights and dark facial tones.'
    },
    cameraAndFocus: {
      camera: 'Digital cinema camera with neon light sensitivity.',
      lens: '35mm and 85mm primes for contrast between intimacy and distance.',
      focus: 'Shallow focus for isolation; key lighting forms natural blur.',
      motion: 'Minimal camera movement with slow dolly-ins during tension peaks.'
    },
    audioDesign: `Tight reverb inside confined car interiors, layered engine vibration and hand movements.
Echo of clothing friction and steering clicks serve as emotional pulse.
No score — only breathing, silence, and urban neon hum filtered through glass.`,
    colorPalette: `60:30:10 —
Dominant 60%: #996F61 (leather brown), #CAA691 (desert beige), #DCBAA8 (pale light)
Secondary 30%: #044374 (night blue), #542C2C (shadow tone)
Accent 10%: #DF04E8 (neon pink highlight)`,
  },
  {
    id: 8,
    title: '아멜리에',
    posterUrl: 'https://i.namu.wiki/i/pjujypBH2xKRJ4HllRdgybZhwl3nobXQoneWpRtvFf-78NMbfNe_bBV-uUyB744GVOMVFs9-L7FFNjJ_GT3fx8hYLTUojAGSZXeAzy7FKtSMpGPJJjipDl4r6K8YJRvrImeY_ss8Biq3Mhazkg4Dxw.webp',
    cinematicStyle: `Soft fairytale cinematic mood with warm yellow tint around subject.
Camera performs slow and continuous pan at waist height with 32mm soft lens.
Bloom gradually expands for 5 seconds, filling the frame with warmth.
Scene fades gently into bright haze, preserving emotional tone.`,
    lightingPalette: {
      light: 'Warm soft yellow-tinted tungsten light with slight shadow diffusion.',
      bloom: 'Long bloom over 5 seconds emphasizing warmth and nostalgic glow.',
      contrast: 'Moderate, keeping high saturation and limited brightness range for fairy-tale warmth.'
    },
    cameraAndFocus: {
      camera: '35mm film camera emphasizing color saturation and texture.',
      lens: '32mm wide prime for intimacy and spatial distortion.',
      focus: 'Shallow during character moments, deep during environment reveals.',
      motion: 'Gentle dolly-in and playful pans mimic fairytale rhythm.'
    },
    audioDesign: `Amplified micro-sounds: footsteps, glass touch, pages turning, drops of water.
Playful exaggerated sound placement — left and right acoustic ping effects.
Soft echo mimics nostalgia — no musical cue, only gentle rhythm of life.`,
    colorPalette: `60:30:10 —
Dominant 60%: #E2B847 (golden yellow), #9DBF56 (green olive)
Secondary 30%: #B31C29 (vivid red), #80573C (warm brown)
Accent 10%: #4D8FC3 (dreamlike sky blue)`,
  },
  {
    id: 9,
    title: '그녀',
    posterUrl: 'https://i.namu.wiki/i/5fG7wMgHtQe9sxlxGlSWQA8Y_jrtDveWOBa8uGTsTEzxYVjcDCw0LGzMF6Xq77rER-mzn-VeHymSum_jcIjQxM653NbNg0VQwUNzujCAMxjv2K-3vO7BxkrOqPL3a9Z_bukP2zR3EjxseH3G39-luA.webp',
    cinematicStyle: `Minimal modern cinematic frame centered on warm pastel surfaces.
Static camera close-up with light handheld movement for realism.
Low bloom around LED reflections over 2 seconds, focusing on emotional calm.
Scene dissolves slowly into soft blur and gentle fade-out.`,
    lightingPalette: {
      light: 'Balanced pastel light with gentle LED reflections, minimal shadow depth.',
      bloom: 'Soft bloom appears for 2 seconds around emotional focus moments.',
      contrast: 'Low contrast, prioritizing human warmth and pastel softness over clarity.'
    },
    cameraAndFocus: {
      camera: 'Digital full-frame camera for clean pastel tones.',
      lens: '85mm lens for intimate portrait-scale framing.',
      focus: 'Extremely shallow depth for emotional isolation.',
      motion: 'Soft handheld shots with minimal tilts and gently sliding dolly.'
    },
    audioDesign: `Organic digital hums and light tactile sounds from devices and fabric contact.
Human breathing mixed with distant ambient reflections of city tones.
Sound is dry, near field, and emotionally intimate — all music removed.`,
    colorPalette: `60:30:10 —
Dominant 60%: #EA6A6A (soft red), #F4A8A8 (rose tint), #D48181 (warm pastel)
Secondary 30%: #D7C9A3 (muted ivory), #B9BEAB (sage gray)
Accent 10%: #5E7CA8 (cool distant blue)`,
  },
  {
    id: 10,
    title: '문라이트',
    posterUrl: 'https://i.namu.wiki/i/V2MI-Y3ApVHYaN0Pb8DV7NjBKeLPK8UKiwK_4a2QbfLJ_31WhuL7wcfNUYOIOTQFdiXO4IHeRG-Zxl3K9ElhpcOFrp0A05N7pY1kI838rJvyn9XpbBx_1l6w4jvcEVAoC2f5M-nhCW2HyMU7_SzCgQ.webp',
    cinematicStyle: `Emotional cinematic feeling with gentle color transition and water reflections.
Camera moves in slow handheld circle at 50mm depth of field focus.
Blue and purple gradient lights bloom slightly for 3 seconds.
Scene closes with warm gold reflection and a slow fade to dark water surface.`,
    lightingPalette: {
      light: 'Mix of moonlight-blue and golden reflections across the skin and surface.',
      bloom: 'Calm soft bloom lasting 3 seconds at emotional climax.',
      contrast: 'Subtle shadow layering, separating skin highlights from deep blue backgrounds.'
    },
    cameraAndFocus: {
      camera: 'Digital camera with natural skin-tone rendering.',
      lens: '50mm–100mm telephoto lenses for emotional closeness.',
      focus: 'Smooth rack focus shifting between faces and reflections.',
      motion: 'Floating handheld motion and slow circular movement around characters.'
    },
    audioDesign: `Close-mic’d ambient sounds of ocean, wet footsteps, and skin contact.
Deep internalized breathing layered with reverb from open night air.
Subtle tonal gradients of echo mirror emotional rhythm — no background melody.`,
    colorPalette: `60:30:10 —
Dominant 60%: #2E3A68 (midnight blue), #554D8C (violet tone), #35406E (dim dusk)
Secondary 30%: #C29F37 (amber warmth), #5DA47A (tropical teal)
Accent 10%: #7E57C2 (purple gradient shimmer)`,
  }
];
