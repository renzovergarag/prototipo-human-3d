import "./App.css";
import { useState } from "react";
import logo from "./assets/react.svg";

function App() {
    const [info, setInfo] = useState(null);
    const [selectedTool, setSelectedTool] = useState("select");

    function openInfo(part) {
        setInfo(part);
    }
    function closeInfo() {
        setInfo(null);
    }

    function resetView() {
        // Placeholder: hook para resetear la cámara cuando agreguemos el renderizador 3D
        console.log("Reset view (stub)");
    }

    return (
        <div className="app-root">
            <header className="topbar">
                <div className="brand">
                    <img src={logo} alt="logo" className="brand-logo" />
                    <div>
                        <h1 className="title">Visualizador clínico 3D</h1>
                        <p className="subtitle">Cuerpo humano — espacio interactivo para consultas</p>
                    </div>
                </div>
                <div className="top-actions">
                    <div className="doctor">Dr. Sergio Castillo</div>
                    <button className="ghost">Ayuda</button>
                </div>
            </header>

            <div className="content-grid">
                <aside className="sidebar">
                    <nav aria-label="Herramientas">
                        <button className={selectedTool === "select" ? "active" : ""} onClick={() => setSelectedTool("select")}>Seleccionar</button>
                        <button className={selectedTool === "annotate" ? "active" : ""} onClick={() => setSelectedTool("annotate")}>Anotar</button>
                        <button className={selectedTool === "measure" ? "active" : ""} onClick={() => setSelectedTool("measure")}>Medir</button>
                        <button onClick={resetView}>Vista original</button>
                    </nav>

                    <div className="sidebar-footer">
                        <small>Proyecto: Visualización médica</small>
                    </div>
                </aside>

                <main className="viewer-area">
                    <div className="viewer-toolbar">
                        <div className="presets">
                            <button>Frontal</button>
                            <button>Lateral</button>
                            <button>Superior</button>
                        </div>
                        <div className="viewer-controls">
                            <label className="control">
                                Brillo
                                <input type="range" min="0" max="2" step="0.1" defaultValue="1" />
                            </label>
                        </div>
                    </div>

                    <div className="viewer-wrapper">
                        {/* Mantener la etiqueta model-viewer para cuando añadamos el componente real; por ahora sirve de placeholder */}
                        <model-viewer src="/src/assets/modelo.glb" alt="Modelo 3D" camera-controls auto-rotate exposure="1" ar className="model-viewer">
                            <button slot="hotspot-head" data-position="0 1 0.2" data-normal="0 0 1" className="hotspot" onClick={() => openInfo("Cabeza")} aria-label="Información cabeza">
                                ℹ
                            </button>
                            <button slot="hotspot-torso" data-position="0 0.6 0.15" data-normal="0 0 1" className="hotspot" onClick={() => openInfo("Torso")} aria-label="Información torso">
                                ℹ
                            </button>
                        </model-viewer>

                        <div className="viewer-placeholder" aria-hidden={false}>
                            <div className="placeholder-inner">
                                <strong>Aquí se cargará el modelo 3D</strong>
                                <p className="muted">Arrastra, gira y acerca el modelo. El visor 3D se integrará aquí.</p>
                            </div>
                        </div>
                    </div>

                    <p className="hint">Usa el ratón o la pantalla táctil para interactuar con el modelo.</p>
                </main>

                <aside className="info-panel" aria-live="polite">
                    {info ? (
                        <section>
                            <h2>{info}</h2>
                            <p>Información clínica y anotaciones para <strong>{info}</strong>. Aquí podrá añadirse texto detallado, imágenes, enlaces y referencias médicas.</p>
                            <button onClick={closeInfo}>Cerrar</button>
                        </section>
                    ) : (
                        <section>
                            <h2>Panel de información</h2>
                            <p>Seleccione una parte del cuerpo en el visor para ver detalles. Use las herramientas a la izquierda para anotar o medir.</p>
                        </section>
                    )}
                </aside>
            </div>

            {info && (
                <div className="modal-overlay" onClick={closeInfo}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{info}</h2>
                        <p>Información sobre la parte seleccionada. Aquí puede añadirse contenido clínico.</p>
                        <button onClick={closeInfo}>Cerrar</button>
                    </div>
                </div>
            )}

            <footer className="footer">© {new Date().getFullYear()} Consultorio · Visualizador 3D</footer>
        </div>
    );
}

export default App;
