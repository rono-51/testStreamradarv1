setInterval(() => {
    // Envía una señal al archivo principal cada 1 segundo exacto
    self.postMessage('procesar_segundo');
}, 1000);