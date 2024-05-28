{
    margin: 0;
    padding: 0;
    font-family: Assistant,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    box-sizing: border-box;
}
header {
    display: flex;
    background-color: #ffffff;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #b6b1b1;
}
.myntra_home {
    height: 45px;
}
.logo_container {
    margin-left: 4%;
}
.action_bar {
    margin-right: 4%;
}
.nav_bar {
    display: flex;
    min-width: 500px;
    justify-content: space-evenly;
}
.nav_bar a {
    font-size: 14px;
    letter-spacing: .3px;
    color: #282c3f;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding: 28px 0;
    border-bottom: 5px solid #ffffff;
}
.nav_bar a:hover {
    border-bottom: 4px solid #f54e77;
}

.nav_bar a sup {
    color: #ff3f6c;
    font-size: 10px;
}

.search_bar {
    height: 40px;
    min-width: 200px;
    width: 30%;
    display: flex;
    align-items: center;
}
.search_icon {
    box-sizing: content-box;
    height: 20px;
    padding: 10px;

    background-color: #f5f5f6;
    color: #282c3f;
    font-weight: 300;
    border-radius: 4px 0 0 4px;
}
.search_input {
    color: #696e79;
    background-color: #f5f5f6;
    flex-grow: 1;
    height: 40px;
    border: 0;
    border-radius: 0 4px 4px 0;
}

.action_bar {
    display: flex;
    min-width: 200px;
    justify-content: space-evenly;
}

.action_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Main section */
.banner_container {
    margin: 40px 0;
}
.banner_image {
    width: 100%;
}

.category_heading {
    text-transform: uppercase;
    color: #3e4152;
    letter-spacing: .15em;
    font-size: 1.8em;
    margin: 50px 0 10px 30px;
    max-height: 5em;
    font-weight: 700;
}

.category-items, .items-container {
    width: 80%;
    margin: 50px 10%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.sale_item {
    width: 250px;
}

.footer_container {
    padding: 30px 0px 40px 0px;
    background: #FAFBFC;
    display: flex;
    justify-content: space-evenly;
}

.footer_column {
    display: flex;
    flex-direction: column;
}

.footer_column h3 {
    color: #282c3f;
    font-size: 14px;
    margin-bottom: 25px;
}

.footer_column a {
    color: #696b79;
    font-size: 15px;
    text-decoration: none;
    padding-bottom: 5px;
}

.copyright {
    color: #94969f;
    text-align: end;
    padding: 15px;
}

.items-container {
    width: 80%;
    margin: 40px 10%;
}
.item-container {
    width: 250px;
    margin: 10px;
}
.item-image {
    width: 100%;
}
.rating {
    font-size: 12px;
    font-weight: 700;
}
.company-name {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    color: #282c3f;
    margin-bottom: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-name {
    color: #535766;
    font-size: 14px;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    display: block;
}
.price {
    margin-top: 10px;
    font-size: 14px;
    line-height: 15px;
    color: #282c3f;
    white-space: nowrap;
}
.current-price {
    font-size: 14px;
    font-weight: 700;
    color: #282c3f;
}
.original-price {
    text-decoration: line-through;
    color: #7e818c;
    font-weight: 400;
    margin-left: 5px;
    font-size: 12px;
}
.discount {
    color: #ff905a;
    font-weight: 400;
    font-size: 12px;
    margin-left: 5px;
}
.btn-add-bag {
    margin-top: 8px;
    font-size: 18px;
    width: 100%;
    background-color: lightgreen;
    border: none;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
}
.bag-item-count {
    background-color: #f16565;
    white-space: nowrap;
    text-align: center;
    line-height: 18px;
    padding: 0 6px;
    height: 18px;
    position: relative;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    left: 13px;
    top: -44px;
    font-weight: 700;
    cursor: pointer;
}
.action_container {
    text-decoration: none;
}
a.action_container:link {
    color:black;
