import { ToastContainer, toast } from 'react-toastify';


const Page3 = () => {
    const notify = () => toast("Wow so easy !");
    return (
    <div>
        <h1> This is Page3</h1>
        <pre>This page Demonstrates the use of Toastify library -v 11</pre>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>)
}
export default Page3;
