import { useRef, useState, useEffect } from 'react';
import { Check, XCircle, InfoCircleFill } from 'react-bootstrap-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import './RegisterForm.css';


const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {
  const userRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const matchPwdRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [errorFields, setErrorFields] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
    setErrorFields([]);
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      setErrorFields([!v1, !v2, !v3]);
      return;
    }

    try {
      // Check if username exists in Local Storage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = existingUsers.find((u) => u.id === user);
      if (existingUser) {
          setErrMsg('Username already exists. Please register a new account.');
          setErrorFields([true, false, false]);
          return;
        }
  
        // Save user data to Local Storage
        const newUser = { id: user, password: pwd };
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
  
        setErrMsg('');
        setUser('');
        setEmail('');
        setPwd('');
        setMatchPwd('');
        setSuccess(true); // Set success to true
      } catch (err) {
        setErrMsg('Registration Failed');
        errRef.current.focus();
      }
    };
  
    return (
      <>
        <div className="login-form-container">
          {success ? (
            <section>
              <h1>Success!</h1>
              <p>
                <span className="line">
                  <NavLink to="/login">Please Sign In Now</NavLink>
                </span>
              </p>
            </section>
          ) : (
            <section>
              <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Đăng Ký Tài Khoản</h1>
              <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                    Tên đăng nhập:
                    {validName && <Check className="valid" />}
                    {!validName && user && <XCircle className="invalid" />}
                    {errorFields[0] && <span className="error-msg">Tên đăng nhập không hợp lệ</span>}
                  </label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName ? 'instructions' : 'offscreen'
                  }
                >
                  <InfoCircleFill />
                  4 đến 24 ký tự.
                  <br />
                  Phải bắt đầu bằng chữ cái.
                  <br />
                  Cho phép chữ cái, số, dấu gạch dưới, dấu gạch ngang.
                </p>
  
                <label htmlFor="email">
                  Email:
                  {validEmail && <Check className="valid" />}
                  {!validEmail && email && <XCircle className="invalid" />}
                  {errorFields[1] && <span className="error-msg">Email không hợp lệ</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />

                <p
                  id="emailnote"
                  className={
                    emailFocus && email && !validEmail
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <InfoCircleFill />
                  Vui lòng nhập một địa chỉ email hợp lệ.
                </p>
  
                <label htmlFor="password">
                  Mật khẩu:
                  {validPwd && <Check className="valid" />}
                  {!validPwd && pwd && <XCircle className="invalid" />}
                  {errorFields[2] && <span className="error-msg">Mật khẩu không hợp lệ</span>}
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
              >
                <InfoCircleFill />
                8 đến 24 ký tự.
                <br />
                Phải bao gồm chữ hoa và chữ thường, một số và một ký tự đặc biệt.
                <br />
                Các ký tự đặc biệt được phép: ! @ # $ %
              </p>

              <label htmlFor="confirm_pwd">
                Xác nhận mật khẩu:
                {validMatch && matchPwd && <Check className="valid" />}
                {!validMatch && matchPwd && <XCircle className="invalid" />}
                {errorFields[3] && <span className="error-msg">Xác nhận mật khẩu không khớp</span>}
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? 'instructions' : 'offscreen'
                }
              >
                <InfoCircleFill />
                Phải khớp với mật khẩu đã nhập ở trường trên.
              </p>

              <button
                disabled={!validName || !validPwd || !validMatch || !validEmail}
              >
                Đăng Ký
              </button>
            </form>
            <p>
              Bạn đã có tài khoản?
              <br />
              <span className="line">
                <NavLink to="/login">Đăng Nhập</NavLink>
              </span>
            </p>
          </section>
        )}
      </div>
    </>
  );
};


export default Register;







// import { useRef, useState, useEffect } from 'react';
// import { Check, XCircle, InfoCircleFill } from 'react-bootstrap-icons';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './RegisterForm.css';




// const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const Register = () => {
//   const userRef = useRef();
//   const emailRef = useRef();
//   const pwdRef = useRef();
//   const matchPwdRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [email, setEmail] = useState('');
//   const [validEmail, setValidEmail] = useState(false);
//   const [emailFocus, setEmailFocus] = useState(false);

//   const [pwd, setPwd] = useState('');
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState('');
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
//   const [errorFields, setErrorFields] = useState([]);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setValidName(USER_REGEX.test(user));
//   }, [user]);

//   useEffect(() => {
//     setValidEmail(EMAIL_REGEX.test(email));
//   }, [email]);

//   useEffect(() => {
//     setValidPwd(PWD_REGEX.test(pwd));
//     setValidMatch(pwd === matchPwd);
//   }, [pwd, matchPwd]);

//   useEffect(() => {
//     setErrMsg('');
//     setErrorFields([]);
//   }, [user, email, pwd, matchPwd]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const v1 = USER_REGEX.test(user);
//     const v2 = EMAIL_REGEX.test(email);
//     const v3 = PWD_REGEX.test(pwd);

//     if (!v1 || !v2 || !v3) {
//       setErrMsg('Invalid Entry');
//       setErrorFields([!v1, !v2, !v3]);
//       return;
//     }

//     try {
//       // Check if username exists in Local Storage
//       const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
//       const existingUser = existingUsers.find((u) => u.id === user);
//       if (existingUser) {
//           setErrMsg('Username already exists. Please register a new account.');
//           setErrorFields([true, false, false]);
//           return;
//         }
  
//         // Save user data to Local Storage
//         const newUser = { id: user, password: pwd };
//         existingUsers.push(newUser);
//         localStorage.setItem('users', JSON.stringify(existingUsers));
  
//         setErrMsg('');
//         setUser('');
//         setEmail('');
//         setPwd('');
//         setMatchPwd('');
//         setSuccess(true); // Set success to true
//       } catch (err) {
//         setErrMsg('Registration Failed');
//         errRef.current.focus();
//       }
//     };
  
//     return (
//       <>
//         <div className="login-form-container">
//           {success ? (
//             <section>
//               <h1>Success!</h1>
//               <p>
//                 <span className="line">
//                   <NavLink to="/login">Please Sign In Now</NavLink>
//                 </span>
//               </p>
//             </section>
//           ) : (
//             <section>
//               <p
//                 ref={errRef}
//                 className={errMsg ? 'errmsg' : 'offscreen'}
//                 aria-live="assertive"
//               >
//                 {errMsg}
//               </p>
//               <h1>Đăng Ký Tài Khoản</h1>
//               <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">
//                   Tên đăng nhập:
//                   <Check className={validName ? 'valid' : 'hide'} />
//                   <XCircle
//                     className={validName || !user ? 'hide' : 'invalid'}
//                   />
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   ref={userRef}
//                   autoComplete="off"
//                   onChange={(e) => setUser(e.target.value)}
//                   value={user}
//                   required
//                   aria-invalid={validName ? 'false' : 'true'}
//                   aria-describedby="uidnote"
//                   onFocus={() => setUserFocus(true)}
//                   onBlur={() => setUserFocus(false)}
//                 />
//                 <p
//                   id="uidnote"
//                   className={
//                     userFocus && user && !validName ? 'instructions' : 'offscreen'
//                   }
//                 >
//                   <InfoCircleFill />
//                   4 đến 24 ký tự.
//                   <br />
//                   Phải bắt đầu bằng chữ cái.
//                   <br />
//                   Cho phép chữ cái, số, dấu gạch dưới, dấu gạch ngang.
//                 </p>
  
//                 <label htmlFor="email">
//                   Email:
//                   <Check className={validEmail ? 'valid' : 'hide'} />
//                   <XCircle
//                     className={validEmail || !email ? 'hide' : 'invalid'}
//                   />
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   autoComplete="off"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   required
//                   aria-invalid={validEmail ? 'false' : 'true'}
//                   aria-describedby="emailnote"
//                   onFocus={() => setEmailFocus(true)}
//                   onBlur={() => setEmailFocus(false)}
//                 />
//                 <p
//                   id="emailnote"
//                   className={
//                     emailFocus && email && !validEmail
//                       ? 'instructions'
//                       : 'offscreen'
//                   }
//                 >
//                   <InfoCircleFill />
//                   Vui lòng nhập một địa chỉ email hợp lệ.
//                 </p>
  
//                 <label htmlFor="password">
//                 Mật khẩu:
//                 <Check className={validPwd ? 'valid' : 'hide'} />
//                 <XCircle className={validPwd || !pwd ? 'hide' : 'invalid'} />
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 onChange={(e) => setPwd(e.target.value)}
//                 value={pwd}
//                 required
//                 aria-invalid={validPwd ? 'false' : 'true'}
//                 aria-describedby="pwdnote"
//                 onFocus={() => setPwdFocus(true)}
//                 onBlur={() => setPwdFocus(false)}
//               />
//               <p
//                 id="pwdnote"
//                 className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
//               >
//                 <InfoCircleFill />
//                 8 đến 24 ký tự.
//                 <br />
//                 Phải bao gồm chữ hoa và chữ thường, một số và một ký tự đặc biệt.
//                 <br />
//                 Các ký tự đặc biệt được phép: ! @ # $ %
//               </p>

//               <label htmlFor="confirm_pwd">
//                 Xác nhận mật khẩu:
//                 <Check className={validMatch && matchPwd ? 'valid' : 'hide'} />
//                 <XCircle
//                   className={validMatch || !matchPwd ? 'hide' : 'invalid'}
//                 />
//               </label>
//               <input
//                 type="password"
//                 id="confirm_pwd"
//                 onChange={(e) => setMatchPwd(e.target.value)}
//                 value={matchPwd}
//                 required
//                 aria-invalid={validMatch ? 'false' : 'true'}
//                 aria-describedby="confirmnote"
//                 onFocus={() => setMatchFocus(true)}
//                 onBlur={() => setMatchFocus(false)}
//               />
//               <p
//                 id="confirmnote"
//                 className={
//                   matchFocus && !validMatch ? 'instructions' : 'offscreen'
//                 }
//               >
//                 <InfoCircleFill />
//                 Phải khớp với mật khẩu đã nhập ở trường trên.
//               </p>

//               <button
//                 disabled={!validName || !validPwd || !validMatch || !validEmail}
//               >
//                 Đăng Ký
//               </button>
//             </form>
//             <p>
//               Bạn đã có tài khoản?
//               <br />
//               <span className="line">
//                 <NavLink to="/login">Đăng Nhập</NavLink>
//               </span>
//             </p>
//           </section>
//         )}
//       </div>
//     </>
//   );
// };


// export default Register;



