import { useEffect } from 'react';
import styles from '../styles/modules/Background.module.css';

const Background = () => {
    useEffect(() => {
        const canvas = document.getElementById('backgroundCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let lines = [];
        const lineCount = 100;
        const speed = 0.5;

        class Line {
            constructor(x, y, length, angle, speed) {
                this.x = x;
                this.y = y;
                this.length = length;
                this.angle = angle;
                this.speed = speed;
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length * Math.cos(this.angle), this.y + this.length * Math.sin(this.angle));
                ctx.strokeStyle = '#BADA55';
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            update() {
                this.x += this.speed * Math.cos(this.angle);
                this.y += this.speed * Math.sin(this.angle);

                if (this.isOutOfBounds()) {
                    this.respawn();
                }

                this.draw();
            }

            isOutOfBounds() {
                return this.x > canvas.width + this.length || this.x < -this.length || this.y > canvas.height + this.length || this.y < -this.length;
            }

            respawn() {
                if (Math.random() < 0.5) {
                    this.x = Math.random() < 0.5 ? -this.length : canvas.width + this.length;
                    this.y = Math.random() * canvas.height;
                } else {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() < 0.5 ? -this.length : canvas.height + this.length;
                }
                this.angle = Math.random() * Math.PI * 2;
                this.speed = Math.random() * 0.5 + 0.2;
                this.length = Math.random() * 100 + 50;
            }
        }

        function init() {
            lines = [];
            for (let i = 0; i < lineCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const length = Math.random() * 100 + 50;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 0.5 + 0.2;
                lines.push(new Line(x, y, length, angle, speed));
            }
        }

        function animate() {
            ctx.fillStyle = 'rgba(34, 34, 34, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            lines.forEach(line => line.update());
            requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas id="backgroundCanvas" className={styles.backgroundCanvas}></canvas>;
};

export default Background;
