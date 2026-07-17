export class LibraryService {
  constructor(user, getIdToken) {
    this.user = user;
    this.getIdToken = getIdToken;

    // Use local backend
    this.baseUrl = 'http://localhost:8000/api/v1/library';
  }

  /**
   * Save a question-answer pair to the knowledge library
   */
  async saveToLibrary(
    userQuestion,
    assistantResponse,
    sessionId,
    messagePairId = null
  ) {
    try {
      const token = await this.getIdToken();

      if (!token) {
        throw new Error('Authentication token not available');
      }

      let responseContent = assistantResponse?.content ?? assistantResponse;

      if (typeof responseContent === 'object' && responseContent !== null) {
        if (
          responseContent.responses &&
          Array.isArray(responseContent.responses)
        ) {
          responseContent = responseContent.responses
            .map((r) => r.content || '')
            .join('\n\n');
        } else {
          responseContent = JSON.stringify(responseContent);
        }
      }

      responseContent = String(responseContent || '');

      const response = await fetch(`${this.baseUrl}/entries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_question: userQuestion,
          assistant_response: responseContent,
          session_id: sessionId,
          message_pair_id: messagePairId,
          tags: [],
          category: null,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Save library backend error:', errorText);
        throw new Error(
          `Failed to save library entry. HTTP ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('Library entry saved:', data);

      return data;
    } catch (error) {
      console.error('Error saving to library:', error);
      throw error;
    }
  }

  /**
   * Get all library entries
   */
  async getLibraryEntries(limit = 50) {
    try {
      const token = await this.getIdToken();

      if (!token) {
        throw new Error('Authentication token not available');
      }

      const response = await fetch(
        `${this.baseUrl}/entries?limit=${limit}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Get library backend error:', errorText);
        throw new Error(
          `Failed to get library entries. HTTP ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('Library entries loaded:', data);

      return data;
    } catch (error) {
      console.error('Error getting library entries:', error);
      throw error;
    }
  }

  /**
   * Search through library entries
   */
  async searchLibrary(
    query,
    limit = 20,
    category = null,
    tags = []
  ) {
    try {
      const token = await this.getIdToken();

      if (!token) {
        throw new Error('Authentication token not available');
      }

      const response = await fetch(`${this.baseUrl}/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query,
          limit,
          category,
          tags,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Search library backend error:', errorText);
        throw new Error(
          `Failed to search library. HTTP ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      console.log('Library search results:', data);

      return data;
    } catch (error) {
      console.error('Error searching library:', error);
      throw error;
    }
  }

  /**
   * Get library statistics
   */
  async getLibraryStats() {
    try {
      const token = await this.getIdToken();

      if (!token) {
        throw new Error('Authentication token not available');
      }

      const response = await fetch(`${this.baseUrl}/stats`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Library stats backend error:', errorText);
        throw new Error(
          `Failed to get library stats. HTTP ${response.status}: ${errorText}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting library stats:', error);
      throw error;
    }
  }
}