var angle_actuel = 0;

/**
 * Modulo mathématique.
 * @param {number} a un nombre
 * @param {number} n le modulo
 * @returns `a` modulo `n` selon la définition mathématique du modulo
 */
const modulo = (a, n) => (a % n + n) % n;

/**
 * Fait tourner le menu, dans le sens le plus direct, vers l’angle indiqué.
 * @param {number} angle l’angle, en degrés, auquel on veut tourner le beignet
 */
const rotateDonut = angle => {
  const différence = angle - angle_actuel;
  const différence_normalisée = modulo(différence + 180, 360) - 180;
  angle_actuel += différence_normalisée;
  const donutMenu = document.getElementById('donut-menu');
  donutMenu.style.setProperty('--rotationMenu', `${-angle_actuel}deg`);
}