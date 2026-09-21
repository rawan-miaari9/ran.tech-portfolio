export const DeveloperSnippet = () => {
  return (
    <div className="relative mx-auto lg:mx-0 max-w-[580px] w-full">
      {/* blue glow behind - matches portfolio */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-blue-500/20 blur-2xl" />
      <div className="rounded-xl bg-[#0a0a0f] border border-white/10 px-6 py-5 shadow-[0_0_40px_rgba(59,130,246,0.15)] overflow-hidden">
        {/* traffic lights */}
        <div className="flex gap-2 mb-5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>

        <pre className="font-mono text-[14px] leading-6 text-left whitespace-pre-wrap break-words">
          <code>
            <span className="text-[#ff7b72]">const</span>{" "}
            <span className="text-white">developer</span>{" "}
            <span className="text-white">= {"{"}</span>
            {"\n"}
            {"  "}
            <span className="text-white">name:</span>{" "}
            <span className="text-emerald-400">"Rawan Miaari"</span>
            <span className="text-white">,</span>
            {"\n"}
            {"  "}
            <span className="text-white">skills:</span>{" "}
            <span className="text-white">[</span>
            <span className="text-emerald-400">"React"</span>
            <span className="text-white">, </span>
            <span className="text-emerald-400">"Next.js"</span>
            <span className="text-white">, </span>
            <span className="text-emerald-400">"Django","..."</span>
            <span className="text-white">]</span>
            <span className="text-white">,</span>
            {"\n"}
            {"  "}
            <span className="text-white">status:</span>{" "}
            <span className="text-emerald-400">"Open to opportunities"</span>
            <span className="text-white">,</span>
            {"\n"}
            {"  "}
            <span className="text-white">location:</span>{" "}
            <span className="text-emerald-400">"Lebanon"</span>
            <span className="text-white">,</span>
            {"\n"}
            <span className="text-white">{"};"}</span>
          </code>
        </pre>
      </div>
    </div>
  );
};
