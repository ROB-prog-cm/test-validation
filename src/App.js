import './App.css';
import {useState} from "react";


const App = () => {
  const initialValue = {name: '', email: '', number: ''}
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
    setFormErrors({
      ...formErrors,
      ...validate(formValues)
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexNumber = /^(\d{3})(\d{3})(\d{4})$/
    const regexName = /^[a-zA-Z\-]+$/;
    if (values.name && !regexName.test(values.name)) {
      errors.name = 'Введено некорректное значение'
    }
    if (values.email && !regexEmail.test(values.email)) {
      errors.email = 'Введено некорректное значение'
    }
    if (values.number && !regexNumber.test(values.number)) {
      errors.number = 'Введено некорректное значение'
    }
    return errors
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='register'>
          <h1>Регистрация</h1>
          <div className='df'>
            <p className='span'>Уже есть аккаунт?</p>
            <p className='spanOpen'>Войти</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='df-fc'>
            <div className='df-fc'>
              <label className='labelText'>Имя</label>
              <input
                className='formInput'
                type="text"
                name='name'
                placeholder='Введите Ваше имя'
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p className='error'>{formErrors.name}</p>
            <div className='df-fc'>
              <label className='labelText'>Email</label>
              <input
                className='formInput'
                onChange={handleChange}
                value={formValues.email}
                type="email"
                name='email'
                placeholder='Введите ваш email'/>
            </div>
            <p className='error'>{formErrors.email}</p>
            <div className='df-fc'>
              <label className='labelText'>Номер телефона</label>
              <input
                className='formInput'
                onChange={handleChange}
                value={formValues.number}
                type="text"
                name='number'
                placeholder='Введите номер телефона'/>
            </div>
            <p className='error'>{formErrors.number}</p>
            <label className='labelText'>Язык</label>
            <div className="select-box">
              <div className="select-box__current" tabIndex="1">
                <div className="select-box__value">
                  <input className="select-box__input" type="radio" id="1" value="1" name="Ben" checked="checked"/>
                  <p className="select-box__input-text">Русский</p>
                </div>
                <div className="select-box__value">
                  <input className="select-box__input" type="radio" id="2" value="2" name="Ben" checked="checked"/>
                  <p className="select-box__input-text">Английский</p>
                </div>
                <div className="select-box__value">
                  <input className="select-box__input" type="radio" id="3" value="3" name="Ben" checked="checked"/>
                  <p className="select-box__input-text">Китайский</p>
                </div>
                <div className="select-box__value">
                  <input className="select-box__input" type="radio" id="4" value="4" name="Ben" checked="checked"/>
                  <p className="select-box__input-text">Испанский</p>
                </div>
                <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                     alt="Arrow Icon" aria-hidden="true"/>
              </div>
              <ul className="select-box__list">
                <li>
                  <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">Русский</label>
                </li>
                <li>
                  <label className="select-box__option" htmlFor="2" aria-hidden="aria-hidden">Английский</label>
                </li>
                <li>
                  <label className="select-box__option" htmlFor="3" aria-hidden="aria-hidden">Китайский</label>
                </li>
                <li>
                  <label className="select-box__option" htmlFor="4" aria-hidden="aria-hidden">Испанский</label>
                </li>
              </ul>
            </div>
            <div className="box">
                <div className="form-group">
                  <input type="checkbox" id="text"/>
                  <label htmlFor="text">Принимаю условия использования</label>
                </div>
            </div>
            <button disabled={isSubmit}  className='formButton'>Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
