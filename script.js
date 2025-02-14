function calculateRecipe() {
    const pepperWeight = document.getElementById("pepperWeight").value;
    const scalingFactor = pepperWeight / 700;
  
    const adjustedRecipe = {
      water: (60 * scalingFactor).toFixed(2),
      tamari: (45 * scalingFactor).toFixed(2),
      mashSalt: (10 * scalingFactor).toFixed(2),
      vinegar: (120 * scalingFactor).toFixed(2),
      sugar: (10 * scalingFactor).toFixed(2),
      finishingSalt: (5 * scalingFactor).toFixed(2),
      garlicOil: (120 * scalingFactor).toFixed(2)
    };
  
    const output = `
      <p><strong>Distilled Water:</strong> ${adjustedRecipe.water} ml</p>
      <p><strong>Tamari:</strong> ${adjustedRecipe.tamari} ml</p>
      <p><strong>Kosher Salt (Mash):</strong> ${adjustedRecipe.mashSalt} g</p>
      <p><strong>White Vinegar:</strong> ${adjustedRecipe.vinegar} ml</p>
      <p><strong>Sugar:</strong> ${adjustedRecipe.sugar} g</p>
      <p><strong>Kosher Salt (Finishing):</strong> ${adjustedRecipe.finishingSalt} g</p>
      <p><strong>Garlic Confit Oil:</strong> ${adjustedRecipe.garlicOil} ml</p>
    `;
  
    document.getElementById("recipeOutput").innerHTML = output;
  }