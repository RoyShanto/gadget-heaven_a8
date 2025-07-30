
const Footer = () => {
    return (
        <div className="py-24 mt-24 bg-white">
            <div className="text-center px-40 max-sm:px-5">
                <h3 className="text-4xl font-bold mb-3">Gadget Heaven</h3>
                <p className="text-gray-500 text-base">Leading the way in cutting-edge technology and innovation.</p>
                <hr className="border-t-gray-200 my-8"/>
            </div>
            <footer className="footer sm:footer-horizontal p-10 flex justify-evenly">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;