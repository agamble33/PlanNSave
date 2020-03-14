// export const SIGNUP = 'SIGNUP'

// export const signup = (email, password) => {
//     return async dispatch => {
//        const response = await fetch(API GOES HERE, {
//       method: 'Post',
//       headers: {
//                'Content-Type': 'application/json',            
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password,
//                 returnSecureToken: true
//             })
// });
// if (!response.ok) {
//     throw new Error('Something went wrong');
// }
// const resData = await response.jason();
// console.log(resData)
//         dispatch({type: SIGNUP})
//     };
// };