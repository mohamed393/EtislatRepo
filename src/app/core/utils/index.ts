export class Utils {
  public static jsonToQueryString(json: any): string {
    if (json) {
      return (
        '?' +
        Object.keys(json)
          .map((key) => {
            return (
              encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
            );
          })
          .join('&')
      );
    } else {
      return '';
    }
  }

  public static convertHtmlToText(html: string): string {
    html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
    html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
    html = html.replace(/<\/div>/gi, '\n');
    html = html.replace(/<\/li>/gi, '\n');
    html = html.replace(/<li>/gi, '  *  ');
    html = html.replace(/<\/ul>/gi, '\n');
    html = html.replace(/<\/p>/gi, '\n');
    html = html.replace(/<br\s*[\/]?>/gi, '\n');
    html = html.replace(/<[^>]+>/gi, '');

    return html;
  }
}
