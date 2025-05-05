import styles from './HomePage.module.css';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const goToChat = () => {
    navigate('/chat');
  };

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.projectInfo}>
        <h1 className={styles.projectTitle}>MEDA</h1>
        <p className={styles.projectDescription}>
          Добро пожаловать в MEDA — ваш личный помощник в вопросах здоровья!
          Это не просто приложение, а ваш надёжный спутник, который всегда рядом.
          MEDA выслушает, поддержит и предложит точные советы, чтобы вы чувствовали уверенность и спокойствие.
        </p>
        <p className={styles.actionCall}>
          Нажмите на кнопку ниже, чтобы познакомиться с вашим новым заботливым помощником и надёжным союзником в вопросах здоровья!
        </p>
      </div>
      <Button
        size="lg"
        color="secondary"
        variant="shadow"
        onPress={goToChat}
        className={styles.startButton}
      >
        Начать чат
      </Button>
      <div className={styles.developersContainer}>
        <div className={styles.developer}>
          <img
            src="/avatar.jpg"
            alt="Developer 1"
            className={styles.developerPhoto}
          />
          <p className={styles.developerName}>Дмитрий Кардашевский</p>
          <p className={styles.developerInfo}>
            Дмитрий — разработчик, который создал MEDA с нуля. Он вложил в проект свои знания и опыт, чтобы сделать его максимально полезным для пользователей.
          </p>
        </div>
      </div>
    </div>
  );
}
