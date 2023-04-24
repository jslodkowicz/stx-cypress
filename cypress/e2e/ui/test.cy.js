import {homePageHelper} from "../../helpers/homePageHelper";
import {blogPageHelper} from "../../helpers/blogPageHelper";

describe('Test STX', () => {

    it('Open Blog page and count search result', () => {
        homePageHelper.openHomePage()
        homePageHelper.clickOnHeaderItem("Blog")
        blogPageHelper.searchInput("test")
        blogPageHelper.searchOutput(4)

    })
})