{"filter":false,"title":"application_controller.rb","tooltip":"/shop0/app/controllers/application_controller.rb","undoManager":{"mark":-1,"position":-1,"stack":[[{"start":{"row":7,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  ","  "],"id":8},{"start":{"row":6,"column":5},"end":{"row":7,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":72},"action":"insert","lines":["before_action :configure_permitted_parameters, if: :devise_controller?"],"id":7}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":72},"action":"remove","lines":["before_action :configure_permitted_parameters, if: :devise_controller?"],"id":6}],[{"start":{"row":8,"column":2},"end":{"row":18,"column":5},"action":"insert","lines":["before_action :configure_permitted_parameters, if: :devise_controller?","","  def after_sign_in_path_for(resource)","    about_path","  end","","  protected","","  def configure_permitted_parameters","    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])","  end"],"id":5}],[{"start":{"row":6,"column":5},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]},{"start":{"row":7,"column":2},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":0,"column":52},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"insert","lines":["  "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":52},"end":{"row":0,"column":52},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1716817621834,"hash":"e2697c31569f813cc7be9b978cec87a3ba1f1463"}