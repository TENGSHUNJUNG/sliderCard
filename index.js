import { ModuleName, ModuleDefaults, ModuleReturns, Module } from './script/module.js'
const root = ( (root) => {
	if ( typeof root === 'object' && ( root.self === root || root.global === global ) && root ) {
		return root;
	}
} )(self || global || {});

const $ = ( ($) => {
	if ( typeof $ === 'function' ) {
		return $;
	} else {
		throw 'You must import jQuery';
	}
} )(root.jQuery);
//↑確認環境 node.js環境下的root會是global / bowser環境下的root會是self也會是window


$.fn[ModuleName] = function() { // ModuleName = lbx_lnop
	let module;      									  //arguments = ["func",{}]
	let args = Array.prototype.slice.call(arguments, 0);  //slice提取從第0個位置開始的所有字符 arguments是陣列的一個特殊方式 無須明確參數即可取得這個值
	let method = args[0]; //args[0] = "func"
	let options = args.slice(1).length<=0?undefined:args.slice(1, args.length);;
	//提取從args的第1個位置開始的所有字符 而它的長度是否有小於等於0 如果是 則輸入undefined 如果不是就提取args從第1個位置到陣列長度的位置
	let isReturnMethod = this.length === 1 && typeof method === 'string' && ModuleReturns.indexOf(method) !== -1;
	let methodRunner = ( method, options, uesReturn ) => { // method = "func"  options = "{}" uesReturn = isReturnMethod
		let $this = $(this); 
		let module = $this.data( ModuleName );
		if ( !!module ) { 
			if ( typeof method == 'string' && !uesReturn ) {
				module[method].apply(module, options);
			} else if ( typeof method == 'string' && !!uesReturn ) {
				return module[method].apply(module, options);
			} else {
		        throw 'unsupported options!';
		    }
		} else {
			throw 'You must run first this plugin!';
		}
	};
	if ( isReturnMethod ) {
		return methodRunner.call( this, method, options, isReturnMethod );
	} else {
		return this.each(function(){
			let $this = $(this);
			let module = $this.data( ModuleName );
			let opts = null;
			if ( !!module ) { 
				methodRunner.call( this, method, options );
			} else { 
				opts = $.extend( true, {}, ModuleDefaults, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );
				module.init();
			}
		});
	}
};