function camposCorrectos({ titulo, linkTrailer }) {
    if (titulo == "" || titulo.trim() == "") {
      swal({
        title: "Error!",
        text: "El título no puede estar vacio",
        icon: "https://res.cloudinary.com/teepublic/image/private/s--6wENKmg7--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1050,w_1260,x_-76,y_-170/co_rgb:faf7e1,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1050,w_1260/fl_layer_apply,g_north_west,x_-76,y_-170/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1050,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/t_watermark_lock/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1648472297/production/designs/28938323_0.jpg",
      });
      return false;
    }
    if (linkTrailer == "" || linkTrailer.trim() == "") {
      swal({
        title: "Error!",
        text: "El link del trailer no puede estar vacio",
       icon: "https://res.cloudinary.com/teepublic/image/private/s--6wENKmg7--/c_crop,x_10,y_10/c_fit,w_1109/c_crop,g_north_west,h_1050,w_1260,x_-76,y_-170/co_rgb:faf7e1,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1050,w_1260/fl_layer_apply,g_north_west,x_-76,y_-170/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1050,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/t_watermark_lock/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1648472297/production/designs/28938323_0.jpg",
      });
      return false;
    }
    return true;
  }