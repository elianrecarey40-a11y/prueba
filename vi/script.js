const boton = document.getElementById("cambiarColorBtn");
    let colorIndex = 0;

    const colores = [
      "#007bff",  
      "#28a745",  
      "#dc3545",  
      "#ffc107",  
      "#17a2b8"   
    ];

    boton.addEventListener("click", () => {
    
      colorIndex = (colorIndex + 1) % colores.length;
      boton.style.backgroundColor = colores[colorIndex];
    });