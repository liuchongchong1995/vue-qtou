import Vue from 'vue';
import CardComponent from './Card';
import CardBodyComponent from './CardBody';
import CardFooterComponent from './CardFooter';
import CardHeaderComponent from './CardHeader';
import CardImgComponent from './CardImg';
import CardLinkComponent from './CardLink';
import CardTextComponent from './CardText';
import CardTitleComponent from './CardTitle';

const components = {
    Card: CardComponent,
    CardBody: CardBodyComponent,
    CardFooter: CardFooterComponent,
    CardHeader: CardHeaderComponent,
    CardImg: CardImgComponent,
    CardLink: CardLinkComponent,
    CardText: CardTextComponent,
    CardTitle: CardTitleComponent
};

const install = function(Vue) {
    Object.keys(components).forEach((key) => {
        Vue.component(key, components[key]);
     });
};

Vue.use(install);

export default install;
