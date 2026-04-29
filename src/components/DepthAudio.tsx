import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function DepthAudio({ scrollProgress }: { scrollProgress: number }) {
  const [muted, setMuted] = useState(true);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    deepDrone: OscillatorNode;
    deepGain: GainNode;
    midDrone: OscillatorNode;
    midGain: GainNode;
    surfaceNoise: AudioBufferSourceNode | null;
    surfaceGain: GainNode;
    masterGain: GainNode;
    lfo: OscillatorNode;
    lfoGain: GainNode;
    whaleSong: OscillatorNode;
    whaleGain: GainNode;
    whaleLfo: OscillatorNode;
    whaleLfoGain: GainNode;
    creakOsc: OscillatorNode;
    creakGain: GainNode;
    pingOsc: OscillatorNode;
    pingGain: GainNode;
  } | null>(null);
  const progressRef = useRef(scrollProgress);
  const pingInterval = useRef<number | null>(null);
  progressRef.current = scrollProgress;

  const initAudio = useCallback(() => {
    if (ctxRef.current) return;

    const ctx = new AudioContext();
    ctxRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.15;
    masterGain.connect(ctx.destination);

    const deepDrone = ctx.createOscillator();
    deepDrone.type = "sine";
    deepDrone.frequency.value = 40;
    const deepGain = ctx.createGain();
    deepGain.gain.value = 0;
    deepDrone.connect(deepGain);
    deepGain.connect(masterGain);
    deepDrone.start();

    const midDrone = ctx.createOscillator();
    midDrone.type = "sine";
    midDrone.frequency.value = 80;
    const midGain = ctx.createGain();
    midGain.gain.value = 0;
    midDrone.connect(midGain);
    midGain.connect(masterGain);
    midDrone.start();

    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.15;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 5;
    lfo.connect(lfoGain);
    lfoGain.connect(deepDrone.frequency);
    lfo.start();

    const surfaceGain = ctx.createGain();
    surfaceGain.gain.value = 0;
    surfaceGain.connect(masterGain);

    const bufferSize = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.3;
    }
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 400;
    noiseFilter.Q.value = 1;
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(surfaceGain);
    noiseSource.start();

    const whaleSong = ctx.createOscillator();
    whaleSong.type = "sine";
    whaleSong.frequency.value = 160;
    const whaleGain = ctx.createGain();
    whaleGain.gain.value = 0;
    const whaleFilter = ctx.createBiquadFilter();
    whaleFilter.type = "bandpass";
    whaleFilter.frequency.value = 200;
    whaleFilter.Q.value = 8;
    whaleSong.connect(whaleFilter);
    whaleFilter.connect(whaleGain);
    whaleGain.connect(masterGain);
    whaleSong.start();

    const whaleLfo = ctx.createOscillator();
    whaleLfo.type = "sine";
    whaleLfo.frequency.value = 0.08;
    const whaleLfoGain = ctx.createGain();
    whaleLfoGain.gain.value = 40;
    whaleLfo.connect(whaleLfoGain);
    whaleLfoGain.connect(whaleSong.frequency);
    whaleLfo.start();

    const creakOsc = ctx.createOscillator();
    creakOsc.type = "sawtooth";
    creakOsc.frequency.value = 25;
    const creakGain = ctx.createGain();
    creakGain.gain.value = 0;
    const creakFilter = ctx.createBiquadFilter();
    creakFilter.type = "lowpass";
    creakFilter.frequency.value = 60;
    creakFilter.Q.value = 5;
    creakOsc.connect(creakFilter);
    creakFilter.connect(creakGain);
    creakGain.connect(masterGain);
    creakOsc.start();

    const pingOsc = ctx.createOscillator();
    pingOsc.type = "sine";
    pingOsc.frequency.value = 1200;
    const pingGain = ctx.createGain();
    pingGain.gain.value = 0;
    pingOsc.connect(pingGain);
    pingGain.connect(masterGain);
    pingOsc.start();

    nodesRef.current = {
      deepDrone,
      deepGain,
      midDrone,
      midGain,
      surfaceNoise: noiseSource,
      surfaceGain,
      masterGain,
      lfo,
      lfoGain,
      whaleSong,
      whaleGain,
      whaleLfo,
      whaleLfoGain,
      creakOsc,
      creakGain,
      pingOsc,
      pingGain,
    };

    pingInterval.current = window.setInterval(() => {
      if (!ctxRef.current || !nodesRef.current) return;
      const p = progressRef.current;
      if (p < 0.1 || p > 0.5) return;
      const t = ctxRef.current.currentTime;
      const vol = Math.min(0.15, (p - 0.1) * 0.5);
      nodesRef.current.pingGain.gain.setValueAtTime(0, t);
      nodesRef.current.pingGain.gain.linearRampToValueAtTime(vol, t + 0.02);
      nodesRef.current.pingGain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
      nodesRef.current.pingOsc.frequency.setValueAtTime(1200, t);
      nodesRef.current.pingOsc.frequency.exponentialRampToValueAtTime(800, t + 0.6);
    }, 6000);
  }, []);

  useEffect(() => {
    if (!nodesRef.current || !ctxRef.current) return;
    const nodes = nodesRef.current;
    const t = ctxRef.current.currentTime;

    if (muted) {
      nodes.masterGain.gain.linearRampToValueAtTime(0, t + 0.3);
    } else {
      nodes.masterGain.gain.linearRampToValueAtTime(0.15, t + 0.3);
    }
  }, [muted]);

  useEffect(() => {
    if (!nodesRef.current || !ctxRef.current || muted) return;
    const nodes = nodesRef.current;
    const p = scrollProgress;
    const t = ctxRef.current.currentTime;

    const surfaceVol = Math.max(0, 1 - p * 4);
    nodes.surfaceGain.gain.linearRampToValueAtTime(surfaceVol * 0.6, t + 0.1);

    const midVol = p < 0.15 ? p / 0.15 : p > 0.6 ? Math.max(0, 1 - (p - 0.6) / 0.3) : 1;
    nodes.midGain.gain.linearRampToValueAtTime(midVol * 0.3, t + 0.1);
    nodes.midDrone.frequency.linearRampToValueAtTime(80 - p * 30, t + 0.1);

    const deepVol = p < 0.3 ? 0 : Math.min(1, (p - 0.3) / 0.3);
    nodes.deepGain.gain.linearRampToValueAtTime(deepVol * 0.5, t + 0.1);
    nodes.deepDrone.frequency.linearRampToValueAtTime(40 - p * 15, t + 0.1);

    nodes.lfo.frequency.linearRampToValueAtTime(0.15 - p * 0.1, t + 0.1);
    nodes.lfoGain.gain.linearRampToValueAtTime(5 + p * 8, t + 0.1);

    const whaleVol = p > 0.04 && p < 0.25 ? Math.min(0.2, Math.sin((p - 0.04) / 0.21 * Math.PI) * 0.2) : 0;
    nodes.whaleGain.gain.linearRampToValueAtTime(whaleVol, t + 0.3);
    nodes.whaleSong.frequency.linearRampToValueAtTime(160 + Math.sin(p * 20) * 30, t + 0.3);

    const creakVol = p > 0.5 ? Math.min(0.08, (p - 0.5) * 0.16) : 0;
    nodes.creakGain.gain.linearRampToValueAtTime(creakVol, t + 0.2);
    nodes.creakOsc.frequency.linearRampToValueAtTime(25 - p * 10, t + 0.2);
  }, [scrollProgress, muted]);

  useEffect(() => {
    return () => {
      if (pingInterval.current) clearInterval(pingInterval.current);
      if (ctxRef.current) {
        ctxRef.current.close();
        ctxRef.current = null;
        nodesRef.current = null;
      }
    };
  }, []);

  const toggle = () => {
    if (!ctxRef.current) {
      initAudio();
      setMuted(false);
    } else {
      setMuted((m) => !m);
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-3 right-3 sm:top-4 sm:right-4 md:top-auto md:bottom-4 md:right-4 z-30 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer"
      style={{
        background: "rgba(8, 16, 36, 0.6)",
        border: `1px solid ${muted ? "rgba(136,146,176,0.2)" : "rgba(100,255,218,0.3)"}`,
      }}
      aria-label={muted ? "Enable sound" : "Mute sound"}
    >
      {muted ? (
        <VolumeX size={14} style={{ color: "#8892b0" }} />
      ) : (
        <Volume2 size={14} style={{ color: "#64ffda" }} />
      )}
    </button>
  );
}
