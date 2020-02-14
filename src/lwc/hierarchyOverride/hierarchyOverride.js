import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class HierarhcyOverride extends NavigationMixin(LightningElement) {
    @api hierarchyURL;

    navigateToHierarhcyView() {
        // navigates to hierarchy view determined by input from lightning page builder variable
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.hierarchyURL
            }
        })
    }

    connectedCallback() {
        this.navigateToHierarhcyView();
    }
}