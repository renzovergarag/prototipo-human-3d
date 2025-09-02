import "./App.css";

function App() {
    // Minimal, clean component rendering the model-viewer element.
    // Use an absolute path that Vite serves from the dev server: /src/assets/modelo.glb
    return (
        <main>
            <h1>Visor 3D</h1>
            <div className="viewer-wrapper">
                {/* model-viewer is loaded globally from index.html */}
                <model-viewer src="/src/assets/modelo.glb" alt="Modelo 3D" camera-controls auto-rotate exposure="1" ar className="model-viewer" />
            </div>
            <p className="hint">Usa el ratón/tacto para rotar y acercar el modelo.</p>
        </main>
    );
}

export default App;
