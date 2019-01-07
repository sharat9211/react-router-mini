import { cloneElement } from 'react';

export default function assertCloneOf({ Assertion }) {
	if (Assertion.__assertCloneOfMounted === true) return;
	Assertion.__assertCloneOfMounted = true;

	Assertion.addMethod('cloneOf', function(routeJsx, { matches = {}, url = this._obj.attributes.path } = {}) {
		const vnode = this._obj;
		const clonedRoute = cloneElement(routeJsx, { url, matches, ...matches });
		new chai.Assertion(vnode).to.be.eql(clonedRoute);
	});
}
