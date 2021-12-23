function getViewButtonIcon(currentRoute, svgObject) {
    return currentRoute === svgObject.route ? svgObject.svgActive : svgObject.svg;
}

export default getViewButtonIcon;
