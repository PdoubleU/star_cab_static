import $ from "jquery";

export const showAlert = (val) => {
    $(val).css({ visibility: 'visible'});
};
