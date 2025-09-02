import "./App.css";
import { useState } from "react";

function App() {
    const [info, setInfo] = useState(null);

    function openInfo(part) {
        setInfo(part);
    }
    function closeInfo() {
        setInfo(null);
    }

    // Minimal, clean component rendering the model-viewer element.
    // Use an absolute path that Vite serves from the dev server: /src/assets/modelo.glb
    return (
        <main>
            <h1>Cuerpo humano en 3D</h1>
            <div className="viewer-wrapper">
                {/* model-viewer is loaded globally from index.html */}
                <model-viewer src="/src/assets/modelo.glb" alt="Modelo 3D" camera-controls auto-rotate exposure="1" ar className="model-viewer">
                    {/* Hotspot para la cabeza (ajusta data-position) */}
                    <button slot="hotspot-head" data-position="0 1 0.2" data-normal="0 0 1" className="hotspot" onClick={() => openInfo("Cabeza")} aria-label="Información cabeza">
                        ⓘ
                    </button>

                    {/* Hotspot para el torso (ajusta data-position) */}
                    <button slot="hotspot-torso" data-position="0 0.6 0.15" data-normal="0 0 1" className="hotspot" onClick={() => openInfo("Torso")} aria-label="Información torso">
                        ⓘ
                    </button>
                </model-viewer>
            </div>

            <p className="hint">Usa el ratón/tacto para rotar y acercar el modelo.</p>

            {info && (
                <div className="modal-overlay" onClick={closeInfo}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{info}</h2>
                        <p>Información sobre la parte seleccionada. Aquí puedes mostrar texto, imágenes o enlaces específicos para {info}.</p>
                        <button onClick={closeInfo}>Cerrar</button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default App;
