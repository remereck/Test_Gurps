import React, { useState } from 'react';
import { useCharacterStore } from '../store';
import { TRANSLATIONS } from '../i18n';
import { X, Plus, Trash2 } from 'lucide-react';

interface StatusEffectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StatusEffectsModal({ isOpen, onClose }: StatusEffectsModalProps) {
  const { 
    lang, 
    statusEffects, 
    activeTransformations,
    toggleTransformation,
    addStatusEffect, 
    removeStatusEffect, 
    gameTimeElapsed 
  } = useCharacterStore();
  const t = TRANSLATIONS[lang];
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState<number | ''>('');

  if (!isOpen) return null;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    addStatusEffect({
      name: name.trim(),
      description: description.trim(),
      durationInSeconds: duration === '' ? 0 : Number(duration),
    });
    
    setName('');
    setDescription('');
    setDuration('');
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <div className="bg-[#111] border border-[#333] rounded-lg w-full max-w-lg max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-[#333] bg-[#1a1a1a]">
          <h2 className="text-[#e5e5e5] text-sm font-bold m-0 uppercase flex items-center gap-2">
            <span className="text-red-400">⚠️</span>
            {lang === 'es' ? 'Estados Aplicados' : 'Applied Status Effects'}
          </h2>
          <button onClick={onClose} className="text-[#888] hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Add New Status Form */}
          <div className="bg-[#1a1a1a] border border-[#333] rounded-md p-3 mb-4">
            <h3 className="text-[11px] font-bold text-[#888] uppercase mb-2">
              {lang === 'es' ? 'Añadir Efecto Negativo / Estado' : 'Add Negative Effect / Status'}
            </h3>
            <form onSubmit={handleAdd} className="flex flex-col gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === 'es' ? 'Nombre del estado (ej. Envenenado)' : 'Status name (e.g. Poisoned)'}
                className="w-full bg-[#111] border border-[#444] text-[#ddd] rounded px-2 py-1.5 text-[12px] outline-none focus:border-red-500/50"
                required
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={lang === 'es' ? 'Descripción del efecto...' : 'Effect description...'}
                className="w-full bg-[#111] border border-[#444] text-[#ddd] rounded px-2 py-1.5 text-[12px] outline-none h-16 resize-none focus:border-red-500/50"
              />
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value === '' ? '' : parseInt(e.target.value))}
                  placeholder={lang === 'es' ? 'Duración (segundos, 0 = ∞)' : 'Duration (seconds, 0 = ∞)'}
                  className="w-2/3 bg-[#111] border border-[#444] text-[#ddd] rounded px-2 py-1.5 text-[12px] outline-none focus:border-red-500/50"
                  min="0"
                />
                <button
                  type="submit"
                  className="w-1/3 bg-red-900/50 hover:bg-red-800/80 border border-red-700 text-red-200 rounded px-2 py-1.5 text-[12px] uppercase font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <Plus size={14} /> {lang === 'es' ? 'Aplicar' : 'Apply'}
                </button>
              </div>
            </form>
          </div>

          {/* Active Statuses List */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[11px] font-bold text-[#888] uppercase mb-1">
              {lang === 'es' ? 'Estados Activos' : 'Active Statuses'}
            </h3>
            
            {statusEffects.length === 0 && activeTransformations.length === 0 ? (
              <div className="text-center text-[#555] text-[12px] py-4 italic">
                {lang === 'es' ? 'No hay estados aplicados.' : 'No active status effects.'}
              </div>
            ) : (
              <>
                {/* Active Transformations */}
                {activeTransformations.map((trans) => {
                  const timeRemaining = trans.durationInSeconds > 0 && trans.durationInSeconds < 9999
                    ? Math.max(0, trans.activationGameTime + trans.durationInSeconds - gameTimeElapsed) 
                    : null;
                    
                  return (
                    <div key={trans.abilityId} className="bg-[#222] border-l-2 border-purple-500 rounded p-2 flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[12px] font-bold text-purple-300">{trans.name[lang]}</span>
                          {timeRemaining !== null ? (
                            <span className="text-[10px] bg-purple-950/80 text-purple-400 px-1.5 py-0.5 rounded font-mono">
                              ⏱ {timeRemaining}s
                            </span>
                          ) : (
                            <span className="text-[10px] bg-[#333] text-[#999] px-1.5 py-0.5 rounded font-mono">
                              ∞
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-[#aaa] m-0 leading-tight">
                          {lang === 'es' ? 'Transformación/Mejora activa.' : 'Active transformation/buff.'}
                        </p>
                      </div>
                      <button 
                        onClick={() => toggleTransformation({
                          abilityId: trans.abilityId,
                          name: trans.name,
                          durationInSeconds: trans.durationInSeconds,
                          statBonuses: trans.statBonuses,
                          maxCorruptionChange: trans.maxCorruptionChange
                        })}
                        className="text-[#666] hover:text-purple-400 transition-colors p-1"
                        title={lang === 'es' ? 'Desactivar' : 'Deactivate'}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}

                {/* Status Effects */}
                {statusEffects.map((status) => {
                  const timeRemaining = status.durationInSeconds > 0 
                    ? Math.max(0, status.activationGameTime + status.durationInSeconds - gameTimeElapsed) 
                    : null;
                    
                  return (
                    <div key={status.id} className="bg-[#222] border-l-2 border-red-500 rounded p-2 flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1 flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-[12px] font-bold text-red-300">{status.name}</span>
                          {timeRemaining !== null ? (
                            <span className="text-[10px] bg-red-950/80 text-red-400 px-1.5 py-0.5 rounded font-mono">
                              ⏱ {timeRemaining}s
                            </span>
                          ) : (
                            <span className="text-[10px] bg-[#333] text-[#999] px-1.5 py-0.5 rounded font-mono">
                              ∞
                            </span>
                          )}
                        </div>
                        {status.description && (
                          <p className="text-[11px] text-[#aaa] m-0 leading-tight">
                            {status.description}
                          </p>
                        )}
                      </div>
                      <button 
                        onClick={() => removeStatusEffect(status.id)}
                        className="text-[#666] hover:text-red-400 transition-colors p-1"
                        title={lang === 'es' ? 'Remover estado' : 'Remove status'}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}