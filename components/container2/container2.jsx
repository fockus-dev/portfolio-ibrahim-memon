import s from './container2.module.scss'

export function About() {
  return (
    <div className={s.about}>
      <h2 className={s.textoDigitado}>I'm a Software Engineer.</h2>
      <h3>
        Currently, I'm a Software Engineer at{' '}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.icon}
        >
          <path
            d="M16 8C16 3.58175 12.4183 0 8 0C3.58175 0 0 3.58169 0 8C0 11.993 2.9255 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77169 3.125C10.647 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.55988 5.25 9.25 5.86669 9.25 6.49937V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.9931 16 8Z"
            fill="#1877F2"
          />
          <path
            d="M11.1141 10.3125L11.4688 8H9.25V6.49937C9.25 5.86669 9.55988 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77169 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.16351 15.9676 7.58144 16.0001 8 16C8.41856 16.0001 8.83649 15.9676 9.25 15.9028V10.3125H11.1141Z"
            fill="white"
          />
        </svg>
        <strong className={s.facebook}> Facebook</strong>,
      </h3>
      <h4>
        A self-taught UI/UX designer, functioning in the industry for 3+ years
        now. I make meaningful and delightful digital products that create an
        equilibrium between user needs and business goals.
      </h4>
    </div>
  )
}
