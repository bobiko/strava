export function convert(type, data) {
    switch (type) {
        case 'distance':
            return (data * 0.001).toFixed(2);
            break;
        default:
            break;
    }
} 