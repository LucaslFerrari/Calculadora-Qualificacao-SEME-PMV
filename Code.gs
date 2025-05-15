function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Calculadora de Pontos de Cursos')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getRules() {
  return [
    { range: "0-14", maxCourses: 4, pointsPerCourse: 5, maxPoints: 20 },
    { range: "15-29", maxCourses: 3, pointsPerCourse: 10, maxPoints: 25 },
    { range: "30-59", maxCourses: 2, pointsPerCourse: 15, maxPoints: 25 },
    { range: "60-79", maxCourses: 2, pointsPerCourse: 20, maxPoints: 30 },
    { range: "80-119", maxCourses: 2, pointsPerCourse: 25, maxPoints: 30 },
    { range: "120-199", maxCourses: 2, pointsPerCourse: 30, maxPoints: 40 },
    { range: "200-359", maxCourses: 1, pointsPerCourse: 40, maxPoints: 40 },
    { range: "360+", maxCourses: 1, pointsPerCourse: 50, maxPoints: 50 }
  ];
}

function calculatePoints(courses) {
  const rules = getRules();
  
  // Classificar cada curso em sua faixa
  const coursesByRange = {};
  rules.forEach(rule => {
    coursesByRange[rule.range] = {
      count: 0,
      points: 0,
      maxCourses: rule.maxCourses,
      pointsPerCourse: rule.pointsPerCourse,
      maxPoints: rule.maxPoints
    };
  });
  
  // Contar cursos em cada faixa
  courses.forEach(hours => {
    for (const rule of rules) {
      const rangeParts = rule.range.split(/[-+]/);
      const min = parseInt(rangeParts[0]);
      const max = rangeParts[1] ? parseInt(rangeParts[1]) : Infinity;
      
      if (hours >= min && hours <= max) {
        coursesByRange[rule.range].count++;
        break;
      }
    }
  });
  
  // Calcular pontos respeitando ambos os limites
  let totalPoints = 0;
  const breakdown = {};
  
  for (const [range, info] of Object.entries(coursesByRange)) {
    // Limitar pelo número máximo de cursos
    const count = Math.min(info.count, info.maxCourses);
    let points = count * info.pointsPerCourse;
    
    // Limitar pelo máximo de pontos da faixa
    points = Math.min(points, info.maxPoints);
    
    breakdown[range] = {
      count: count,
      points: points,
      maxPoints: info.maxPoints
    };
    
    totalPoints += points;
  }
  
  return {
    totalPoints: totalPoints,
    breakdown: breakdown
  };
}