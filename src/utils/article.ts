const now = new Date();
export function isPublished(published) {
    const publishedDate = published ? new Date(published) : null;
    if (publishedDate && publishedDate > now) {
        return false;
    }
    return true;
}
