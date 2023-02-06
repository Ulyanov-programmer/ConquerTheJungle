import Submenu, { SubmenuElementGroup, SubmenuOpenIvents } from './modules/submenu.src.js'

new Submenu(
  { menuActiveClass: 'show', buttonActiveClass: 'active', disableOnEsc: true },

  new SubmenuElementGroup({
    openIvent: SubmenuOpenIvents.Hover,
    buttonsSelector: '.submenu__hover_button',
    menusSelector: '.menu__hover',
  }),
  new SubmenuElementGroup({
    openIvent: SubmenuOpenIvents.Click,
    buttonsSelector: '.submenu__click_button',
    menusSelector: '.menu__click',
  }),
)