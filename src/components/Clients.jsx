import { clients } from "../constants/constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 `}>
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 hover:bg-sky-200 bg-primary-100 cursor-pointer rounded-full`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain py-3 hover:text-secondary"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
