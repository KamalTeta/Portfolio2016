function konami(e){
		if(e.keyCode==38){
			function konamiStep2(e){
				if (e.keyCode==38){
					function konamiStep3(e){
						if (e.keyCode==40){
							function konamiStep4(e){
								if (e.keyCode==40){
									function konamiStep5(e){
										if (e.keyCode==37){
											function konamiStep6(e){
												if (e.keyCode==39){
													function konamiStep7(e){
														if (e.keyCode==37){
															function konamiStep8(e){
																if (e.keyCode==39){
																	function konamiStep9(e){
																		if (e.keyCode==66){
																			function konamiStep10(e){
																				if (e.keyCode==65){
																					adventure();
																					document.onkeydown = konami;
																				}else{
																					document.onkeydown = konami;
																				}
																			}
																			document.onkeydown = konamiStep10;
																		}else{
																			document.onkeydown = konami;
																		}
																	}
																	document.onkeydown = konamiStep9;
																}else{
																	document.onkeydown = konami;
																}
															}
															document.onkeydown = konamiStep8;
														}else{
															document.onkeydown = konami;
														}
													}
													document.onkeydown = konamiStep7;
												}else{
													document.onkeydown = konami;
												}
											}
											document.onkeydown = konamiStep6;
										}else{
											document.onkeydown = konami;
										}
									}
									document.onkeydown = konamiStep5;
								}else{
									document.onkeydown = konami;
								}
							}
							document.onkeydown = konamiStep4;
						}else{
							document.onkeydown = konami;
						}
					}
					document.onkeydown = konamiStep3;
				}else{
					document.onkeydown = konami;
				}
			}
			document.onkeydown = konamiStep2;
		}else{
			document.onkeydown = konami;
		}
	}