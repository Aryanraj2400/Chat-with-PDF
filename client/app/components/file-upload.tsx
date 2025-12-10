'use client';

import * as React from 'react';
import { CloudUpload, ShieldCheck, Sparkles } from 'lucide-react';

const FileUplaodComponent: React.FC = () => {
    const handleFileUploadButton =()=>{
        const el = document.createElement('input');
        el.setAttribute('type','file');
        el.setAttribute('accept','application/pdf');
        el.addEventListener('change',async(ev)=>{
            if(el.files && el.files.length > 0){
                const file = el.files.item(0);
                if(file){
                  const formData = new FormData();
                  formData.append('pdf',file);

                  await fetch('http://localhost:8000/uploads/pdf', {
                    method: 'POST',
                    body: formData,
                  });
                }
            }
        });
        el.click();

    };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 px-6 py-8 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/70 p-10 shadow-2xl shadow-black/40">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-cyan-300 shadow-md shadow-black/40">
            <CloudUpload className="h-8 w-8" />
          </span>
          <div className="space-y-2">
            <p className="text-lg font-semibold">Upload your files</p>
            <p className="text-sm text-slate-400">
              Drag & drop or click to browse. Supports PDF, DOCX, TXT and more.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={handleFileUploadButton} className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-400/40">
              Browse files
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUplaodComponent;