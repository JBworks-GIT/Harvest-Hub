import Button from "../components/Button/Button";
import styles from "../stylesheet/contact.module.css";
import styles1 from "../stylesheet/Navigation.module.css";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import brand from "../assets/logo.png";
const Contact = () => {
  return (
    <>
      <nav className={`${styles1.navigation} container`}>
        {/* Use styles object */}
        <img src={brand} alt="Nike" />

        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="VIA CALL" icon={<IoIosCall fontSize="26px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="26px" />}
          />

          <form action="#">
            <div className={styles.form_fields}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_fields}>
              <label htmlFor="mail">Email</label>
              <input type="mail" name="email" />
            </div>
            <div className={styles.form_fields}>
              <label htmlFor="Text">Text</label>
              <textarea name="text" rows="8" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Button text="SUBMIT" />
            </div>
          </form>
        </div>
        <div className={styles.img_box}>
          <img src="src\assets\images\contact.svg" alt="Contact" />{" "}
          {/* Use absolute path */}
        </div>
      </section>
    </>
  );
};

export default Contact;
