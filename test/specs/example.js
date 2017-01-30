import {expect} from 'chai';

import HomePage from '../pages/home.page.js';

describe('[CHECK TITLE]', () => {

    it('homepage should have the correct title', () => {

        HomePage.open();

        expect(HomePage.getTitle()).to.equal('Present Technologies');
    });

    //TODO
});

//NEW TEST FP
describe('[CHECK MENU LINKS]', () => {
	
	it('should check if the menu links are working', () => {
		
		HomePage.open();
		
		var menuLinks = $$('#responsive-menu a');
		
		menuLinks.forEach(function (link) {
			link.click();
		});
		
	});
});