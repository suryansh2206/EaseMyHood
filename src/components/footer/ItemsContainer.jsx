import Item from "./Item";
import { Pages, Categories,Partner, ContactUs} from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
     <Item Links={Pages} title="Pages" />
      <Item Links={Categories} title="Categories" />
      <Item Links={Partner} title="Become a Partner" />
      <Item Links={ContactUs} title="Contact Us" />
    </div>
  );
};

export default ItemsContainer;